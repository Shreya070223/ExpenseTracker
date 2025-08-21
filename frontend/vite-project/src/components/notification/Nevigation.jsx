import React from 'react'
import styled from 'styled-components'
import avatar from "../../img/avatar.avif"
import {menuItems} from "../../utils/menuItems.jsx"
import { signout } from '../../utils/icons'

function Nevigation(active, setActive) {

  return (
    <NavStyled>
        <div className="user-con">
            <img src={avatar} alt="" />
            <div className="text">
                <h2>Mike</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
           {menuItems.map((item)=>{
             return<li
             key={item.id}
             onClick={()=>setActive(item.id)}
             className={active===item.id ? 'active':''}
             >
              {item.icon}
              <span>{item.title}</span>
             </li>
           }
          )
          }
        </ul>
        <div className="bottom-nav">
          <li>
            {signout}Sign out
          </li>
        </div>
    </NavStyled>
  )
}

const NavStyled=styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  gap: 2rem;
  overflow-y: auto;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
    }

    .text {
      h2 {
        font-size: 1rem;
        font-weight: 600;
        color:rgba(34,34,96,1);
      }
      p {
        font-size: 0.9rem;
        opacity: 0.8;
        color:rgba(34,34,96,1);
      }
    }
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(252, 246, 249, 0.78);
        transform: translateX(10px);
        font-size:1.4rem;
        transition: all .4s ease-in-out;
      }

      span {
        font-size: 1rem;
        font-weight: 500;
        color: var(--primary-color);
      }
    }
  }

  .bottom-nav {
    margin-top: auto;
    
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--color-delete);

      &:hover {
        background: rgba(255, 0, 0, 0.1);
        transform: translateX(10px);
      }
    }
  }

  .active{
  color:rgba(34,34,96,1);
  i{
  color:rgba(34,34,96,1);
  }
  &::before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:4px;
  height:100%;
  background:#222260;
  border-radius:0 10px 10px 0;
  }
  }
`;

export default Nevigation