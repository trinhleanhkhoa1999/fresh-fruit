import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export default function Sidebar() {
  const navigate = useNavigate();

  const SidebarItem = ({ icon, text, to }: TSidebarItem) => (
    <li
      onClick={() => {
        navigate(to);
      }}
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </li>
  );
  return (
    <div className="sidebar-container">
      <ul>
        <SidebarItem icon={<AiFillPlusCircle />} text="CRUD Product" to="/dashboard/CRUDProduct" />
        <SidebarItem icon={<AiFillPlusCircle />} text="CRUD User" to="/dashboard/CRUDUser" />
        <SidebarItem icon={<AiFillPlusCircle />} text="Go home page" to="/" />
      </ul>
    </div>
  );
}
