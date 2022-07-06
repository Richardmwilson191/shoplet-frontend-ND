import { useContext } from 'react'
import { useAxios } from '@/hooks/useAxios'
import Button from './Button'
import Label from './Label'
import AuthValidationErrors from './AuthValidationErrors'
import Textarea from './Textarea'
import Input from './Input'
import { ProductCategoryContext } from '@/pages/dashboard/product/category'

const EditProductCategory = () => {
    const {
        setData,
        dispatch,
        state,
        Modal,
        formData,
        handleChange,
        errors,
        setErrors,
    } = useContext(ProductCategoryContext)

    const { put } = useAxios()

    const submit = e => {
        e.preventDefault()
        put({ route: '/api/product/category', setErrors, formData, setData })

        dispatch({ type: 'toggleCategory' })
    }

    return (
        <Modal
            isOpen={state.isOpenCategory}
            closeModal={() => dispatch({ type: 'toggleCategory' })}
            title="Edit Product Category">
            <form onSubmit={submit}>
                <AuthValidationErrors className="mb-4" errors={errors} />

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
                <Button>Update</Button>
            </form>
        </Modal>
    )
}

export default EditProductCategory
