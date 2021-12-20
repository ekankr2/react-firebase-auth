import {FC, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {signin} from "../../../store/actions/authActions";
import {registerBoard, setError} from "../../../store/actions/boardActions";
import Input from "../../UI/Input";


const BoardRegister: FC = () => {
    const {user} = useSelector((state: RootState) => state.auth);
    const {error, success} = useSelector((state: RootState) => state.board);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        }
    }, [error, dispatch]);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (error) {
            dispatch(setError(''));
        }
        setLoading(true);
        if (user) {
            dispatch(registerBoard({title, content}, user, () => setLoading(false)));
        }
    }

    return (
        <section>
            <div className="container">
                <h2 className="has-text-centered is-size-2 mb-3">Register</h2>
                <form className="form" onSubmit={submitHandler}>
                    <Input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e)=> setTitle(e.currentTarget.value)}
                        placeholder="제목 입력"
                        label="title"
                    />
                    <Input
                        type="text"
                        name="content"
                        value={content}
                        onChange={(e)=> setContent(e.currentTarget.value)}
                        placeholder="내용 입력"
                        label="content"
                    />
                </form>
            </div>
        </section>
    )
}
