import {NavLink, Outlet} from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
        atque blanditiis, corporis culpa deleniti doloremque dolores ea eos est
        illum laudantium nostrum, obcaecati quasi, quisquam similique totam ut
        velit!
      </p>
        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">View the contact</NavLink>
        </nav>
      <Outlet />
    </div>
  );
}
