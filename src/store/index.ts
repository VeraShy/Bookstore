import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./Products/productsReducer";
import { productInfoReducer } from "./ProductInfo/productInfoReducer";
import { bookPreviewReducer } from "./BookPreview/bookPreviewReducer";
import { cartReducer } from "./Cart/cartReducer";
import { paginationReducer } from "./Pagination/paginationReducer";
import { signUpReducer } from "./SignUp/signUpReducer";
import { userSessionReducer } from "./UserSession/userSessionReducer";
import { errorsReducer } from "./Errors/errorsReducer";
import { loadState , saveState } from "../localStorage";

const rootReducer = combineReducers({
    products: productsReducer,
    productDetails: productInfoReducer,
    bookPreview: bookPreviewReducer,
    cart: cartReducer,
    pagination: paginationReducer,
    signUp: signUpReducer,
    session: userSessionReducer,
    errors: errorsReducer,
});

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

    store.subscribe(() => {
        saveState(store.getState())
    });

    return store;
}

export type RootStateType = ReturnType<typeof rootReducer>;

export default configureStore;