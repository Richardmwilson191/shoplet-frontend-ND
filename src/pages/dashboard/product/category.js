import { useState, createContext } from 'react'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Label from '@/components/Label'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import Table from '@/components/Lists/Table'
import useAxiosGet from '@/hooks/useAxiosGet'
import useModal from '@/hooks/useModal'
import { useAxios } from '@/hooks/useAxios'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import EditProductCategory from '@/components/EditProductCategory'

export const ProductCategoryContext = createContext({})

const Category = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        desc: '',
    })
    const { post, destroy } = useAxios()
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
    const tableHeadings = { name: 'name', description: 'desc' }
    const { dispatch, state, Modal } = useModal()

    const { data, fetchError, isLoading, setData } = useAxiosGet(
        `${baseURL}/api/product/category`,
    )

    const handleChange = e => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const submit = e => {
        e.preventDefault()
        post({ route: '/api/product/category', setErrors, formData, setData })

        dispatch({ type: 'toggleModal' })
    }

    const handleDelete = id => {
        destroy({
            route: '/api/product/category',
            id,
            setErrors,
            setData,
        })
    }

    const handleEdit = item => {
        setFormData({ id: item.id, name: item.name, desc: item.desc })
        dispatch({ type: 'toggleCategory' })
    }

    const addProductCategory = () => {
        setFormData({ name: '', desc: '' })
        dispatch({ type: 'toggleModal' })
    }

    return (
        <ProductCategoryContext.Provider
            value={{
                setData,
                formData,
                setFormData,
                dispatch,
                state,
                Modal,
                handleChange,
                errors,
                setErrors,
            }}>
            <DashboardLayout
                head={
                    <>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Product Category
                        </h1>
                        <Button type="button" onClick={addProductCategory}>
                            Add Category
                        </Button>
                    </>
                }>
                <EditProductCategory />
                <Modal
                    isOpen={state.isOpen}
                    closeModal={() => dispatch({ type: 'toggleModal' })}
                    title="Add Product Category">
                    <form onSubmit={submit}>
                        <AuthValidationErrors
                            className="mb-4"
                            errors={errors}
                        />

                        <div className="mt-4">
                            <Label htmlFor="name">Name</Label>

                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                className="block mt-1 w-full"
                                onChange={handleChange}
                                required
                                autoComplete="category"
                                placeholder="Computer Repair"
                            />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="desc">Description</Label>
                            <Textarea
                                id="desc"
                                name="desc"
                                value={formData.desc}
                                className="block mt-1 w-full"
                                handleChange={handleChange}
                                required
                            />
                        </div>
                        <Button>Submit</Button>
                    </form>
                </Modal>
                {isLoading && <p className="statusMsg">Loading product...</p>}
                {!isLoading && fetchError && (
                    <p className="statusMsg" style={{ color: 'red' }}>
                        {fetchError}
                    </p>
                )}
                {!isLoading && !fetchError && (
                    <Table
                        data={data}
                        headings={tableHeadings}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                )}
            </DashboardLayout>
        </ProductCategoryContext.Provider>
    )
}

export default Category
