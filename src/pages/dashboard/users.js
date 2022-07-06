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
import EditServiceCategory from '@/components/EditServiceCategory'

export const ServiceCategoryContext = createContext({})

const User = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    })
    const { post, destroy } = useAxios()
    const { dispatch, state, Modal } = useModal()
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users`
    const tableHeadings = {
        name: 'name',
        username: 'username',
        email: 'email',
        role: 'title',
    }

    const { data, fetchError, isLoading, setData } = useAxiosGet(URL)

    const handleChange = e => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const submit = e => {
        e.preventDefault()
        post({ route: '/api/users', setErrors, formData, setData })

        dispatch({ type: 'toggleModal' })
    }

    const handleDelete = id => {
        destroy({
            route: '/api/users',
            id,
            setErrors,
            setData,
        })
    }

    const handleEdit = item => {
        setFormData({ id: item.id, name: item.name, desc: item.desc })
        dispatch({ type: 'toggleCategory' })
    }

    const addUser = () => {
        setFormData({
            name: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        })
        dispatch({ type: 'toggleModal' })
    }

    return (
        <ServiceCategoryContext.Provider
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
                            Users
                        </h1>
                        <Button type="button" onClick={addUser}>
                            Add User
                        </Button>
                    </>
                }>
                {/* <EditServiceCategory /> */}
                <Modal
                    isOpen={state.isOpen}
                    closeModal={() => dispatch({ type: 'toggleModal' })}
                    title="Add Service Category">
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
                                autoComplete="name"
                                placeholder="Jack Frost"
                            />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="username">Username</Label>

                            <Input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                className="block mt-1 w-full"
                                onChange={handleChange}
                                required
                                autoComplete="username"
                                placeholder="Jacko12"
                            />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="name">Email</Label>

                            <Input
                                id="email"
                                name="email"
                                type="text"
                                value={formData.email}
                                className="block mt-1 w-full"
                                onChange={handleChange}
                                required
                                autoComplete="email"
                                placeholder="jack@example.com"
                            />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="name">Password</Label>

                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                className="block mt-1 w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="password_confirmation">
                                Confirm Password
                            </Label>

                            <Input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                value={formData.password_confirmation}
                                className="block mt-1 w-full"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button>Submit</Button>
                    </form>
                </Modal>
                {isLoading && <p className="statusMsg">Loading services...</p>}
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
        </ServiceCategoryContext.Provider>
    )
}

export default User
