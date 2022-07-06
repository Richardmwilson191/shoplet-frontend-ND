import axios from '@/lib/axios'

export const useAxios = () => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const resetData = (route, setData = null, redirect) => {
        if (setData) {
            axios
                .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${route}`)
                .then(response => {
                    setData(response.data)
                })
        }
        if (redirect) window.location.pathname = redirect
    }

    const post = async ({ route, setErrors, formData, setData, redirect }) => {
        await csrf()

        setErrors([])

        await axios
            .post(route, formData)
            .then(() => {
                resetData(route, setData, redirect)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const postFile = async ({ route, setErrors, body, redirect }) => {
        await csrf()
        setErrors([])

        await axios
            .post(route, body)
            .then()
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
        if (redirect) window.location.pathname = redirect
    }

    const put = async ({ route, setErrors, formData, setData, redirect }) => {
        await csrf()

        setErrors([])

        await axios
            .put(`${route}/${formData.id}`, formData)
            .then(() => {
                resetData(route, setData, redirect)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const destroy = async ({ id, route, setErrors, setData }) => {
        await axios
            .delete(`${route}/${id}`)
            .then(() => {
                resetData(route, setData)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    return { post, put, destroy, postFile }
}
