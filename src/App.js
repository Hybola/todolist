import "./App.scss";
import {
  FaHome,
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <header className="header">
        <span>
          <FaHome />
        </span>
        <h3>CC-Todolist</h3>
      </header>

      <aside className="sidebar">
        <section className="sidebar__generic">
          <ul className="generic__lists">
            <li className="active">
              <span>
                <FaInbox />
              </span>
              Inbox
            </li>
            <li className="active">
              <span>
                <FaCalendar />
              </span>
              Today
            </li>
            <li className="active">
              <span>
                <FaCalendarAlt />
              </span>
              Next 7 Days
            </li>
          </ul>
        </section>
        <section className="sidebar__middle">
          <span>
            <FaChevronDown />
          </span>
          Project
        </section>
        <section className="sidebar__projects">
          <ul className="generic__lists">
            <li className="active">
              <span>
                <FaInbox />
              </span>
              Project-A
            </li>
            <li className="active">
              <span>
                <FaInbox />
              </span>
              Project-B
            </li>
          </ul>
        </section>
      </aside>
      <main className="content">content</main>
    </div>
  );
}

export default App;
