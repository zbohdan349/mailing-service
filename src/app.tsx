import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage, mainPageLoader } from './pages/mainPage';
import { HistoryPage } from './pages/historyPage';
import { MailingPage } from './pages/mailingPage';
import { CreateMailingPage } from './pages/createMailingPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: mainPageLoader
  },
  {
    path: "create",
    element: <CreateMailingPage />
  },
  {
    path: "mailing/:mailingId",
    element: <MailingPage />
  },
  {
    path: "history",
    element: <HistoryPage />
  }
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
