import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./layouts/Root";
import {ROUTES} from "./routes/routes";
import { About, Blog, BlogPost, Contact, Home, NotFound } from "./pages";


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<NotFound />}>
			<Route path={ROUTES.home.path} element={<Home />} />
			<Route path={ROUTES.about.path} element={<About />} />
			<Route path={ROUTES.contact.path} element={<Contact />} />
      <Route path={ROUTES.blogPost.path} element={<BlogPost />} />
      <Route path={ROUTES.blog.path} element={<Blog />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
