import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/root.reducer";
import {Suspense} from "react";
import {Main} from "../pages/Main";

export const Switcher = () => {
    const {screen} = useSelector((state: RootState) => state.meta)

    switch (screen) {
        case '':
            return (
                <Suspense>
                    <Main />
                </Suspense>
            );
        case 'main':
        default:
            return (
                <Suspense>
                    <Main />
                </Suspense>
            );
    }
}