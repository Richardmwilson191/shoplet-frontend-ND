import { useState, useEffect } from 'react'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Input from '@/components/Input'
import Label from '@/components/Label'
import AppLayout from '@/components/Layouts/AppLayout'
import { useAxios } from '@/hooks/useAxios'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'
import axios from '@/lib/axios'
import Select from '@/components/Select'
import { useAuth } from '@/hooks/auth'

const Create = () => {
    useAuth({ middleware: 'auth' })
    const [formData, setFormData] = useState({
        categoryId: '',
        name: '',
        desc: '',
        price: '',
        condition: '',
        img: '',
    })
    const [errors, setErrors] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    function getCategories() {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/category`)
            .then(response => setCategories(response.data))
    }

    const { postFile } = useAxios()

    const handleChange = e => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleFile = e => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.files[0] }
        })
    }

    const submit = e => {
        const body = new FormData()
        for (const [key, value] of Object.entries(formData)) {
            body.append(key, value)
        }
        e.preventDefault()
        postFile({ route: '/api/product', setErrors, body, redirect: '/sell' })
    }

    return (
        <AppLayout>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <form onSubmit={submit} encType="multipart/form-data">
                    <AuthValidationErrors className="mb-4" errors={errors} />
                    <div className="">
                        <Label htmlFor="categories">Category</Label>
                        <Select
                            id="categories"
                            name="categoryId"
                            value={formData.categoryId}
                            handleChange={handleChange}>
                            <option disabled>Select category</option>
                            {categories?.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Select>
                    </div>
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
                            placeholder="iPhone 13"
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
                            placeholder="Brand new 256GB internal memory 4GB RAM"
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            value={formData.price}
                            className="block mt-1 w-full"
                            onChange={handleChange}
                            required
                            placeholder="6000"
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="condition">Condition</Label>
                        <Select
                            name="condition"
                            value={formData.condition}
                            handleChange={handleChange}>
                            <option disabled>Select condition</option>
                            <option value="brand_new">Brand new</option>
                            <option value="open_box">Open box</option>
                            <option value="used">Used</option>
                        </Select>
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="img">Image</Label>
                        <Input
                            id="img"
                            name="img"
                            type="file"
                            className="block mt-1 w-full"
                            onChange={handleFile}
                            required
                        />
                    </div>
                    <Button>Submit</Button>
                </form>
            </div>
        </AppLayout>
    )
}

export default Create
