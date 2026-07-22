import App from '@/components/App';

// Single entry route — the whole product is one state-driven client app
// (Home/Doctors/Profile/Reservation/Payment/Confirmation/Login/Register are
// views toggled in-memory, not Next.js routes), per product requirements.
export default function Page() {
  return <App />;
}
