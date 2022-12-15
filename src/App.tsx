import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./redux/reducers/root.reducer";
import {Loading} from "./components/Loading";
import {Switcher} from "./components/Switcher";
import {IsLoaded} from "./redux/actions/actionTypes";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const {loading} = useSelector((state: RootState) => state.meta)

    useEffect(() => {
        setTimeout(() => dispatch(IsLoaded), 2500)
    }, [])

    return (
        <div className={`App ${true?"light":"dark"}`}>
            {loading ? <Loading/> : <Switcher/>}
        </div>
    );
}

export default App;
