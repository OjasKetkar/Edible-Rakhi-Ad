// // import { Children } from "react"
// import { NavLink } from "react-router-dom"

// export default function SideBar(children){
// const menuItem = [
//     {
//         path:'/',
//         name : 'Sidebar',

//     }
// ] 

//     return (
//         <div className="container">
//             <div className="sidebar">
//                 <div className="top_section">
//                     <img src="../images/menu.png" alt="" />
//                 </div>
            
//             {
//                 menuItem.map((item,index)=>(
//                     <NavLink to={item.path} key={index} className='link' activeclassName = 'active'>
//                         <div className="icon">{item.icon}</div>
//                         <div className="link_text">{item.name}</div>
//                         </NavLink>
//                 ))
//             }
//         </div>
//             <main>{children}</main>
//         </div>
       
//     )
// }