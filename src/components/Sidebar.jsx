import {
  FaHome,
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar__generic">
        <ul className="generic__lists">
          <li className="active">
            <span>
              <FaInbox />
            </span>
            Inbox
          </li>
          <li>
            <span>
              <FaCalendar />
            </span>
            Today
          </li>
          <li>
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
          <li>
            <span>
              <FaInbox />
            </span>
            Project-A
          </li>
          <li>
            <span>
              <FaInbox />
            </span>
            Project-B
          </li>
        </ul>
      </section>
    </aside>
  );
}
