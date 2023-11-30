import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./Products/productsReducer";
import { productInfoReducer } from "./ProductInfo/productInfoReducer";
import { bookPreviewReducer } from "./BookPreview/bookPreviewReducer";
import { cartReducer } from "./Cart/cartReducer";
import { paginationReducer } from "./Pagination/paginationReducer";
import { signUpReducer } from "./SignUp/signUpReducer";
import { userAccountReducer } from "./UserAccount/userAccountReducer";
import { loadState , saveState } from "../localStorage";
import { signInReducer } from "./SignIn/signInReducer";
import { searchReducer } from "./Search/searchReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    productDetails: productInfoReducer,
    bookPreview: bookPreviewReducer,
    cart: cartReducer,
    pagination: paginationReducer,
    signUp: signUpReducer,
    signIn: signInReducer,
    account: userAccountReducer,
    search: searchReducer,
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