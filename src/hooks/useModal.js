import Modal from '@/components/Modal'
import { useReducer } from 'react'

const useModal = () => {
    const modalStates = {
        isOpen: false,
        isOpenCategory: false,
        isOpenAddress: false,
        isOpenService: false,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'toggleModal':
                return { ...state, isOpen: !state.isOpen }
            case 'toggleCategory':
                return { ...state, isOpenCategory: !state.isOpenCategory }
            case 'toggleAddress':
                return { ...state, isOpenAddress: !state.isOpenAddress }
            case 'toggleService':
                return { ...state, isOpenService: !state.isOpenService }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, modalStates)

    return { dispatch, state, Modal }
}

export default useModal
