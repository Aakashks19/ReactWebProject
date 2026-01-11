import { NavLink} from "react-router-dom"

const Header = (props) => {
    const navi =[
        { name: "Home", link: "/"},
        { name: "About", link: "/about"},
        { name: "Contact", link: "/contact"}
    ]
  return (
    <div>
        <header>
        <div id="logo">
        <img id="flip" src={props.logo} alt=""/>
        <div className="search">
        <i id='icon' class="fa-solid fa-magnifying-glass"></i><input className="se" type="search" id="search" placeholder="Search for Products....."></input>
        </div>
        <ul>
            {navi.map((na) =>(
                <li key = {na.name}>
                    <NavLink to = {na.link} className={({ isActive }) => isActive? "active-link" : ""}>
                        {na.name}
                    </NavLink>
                </li>
            ))}
            <li><a href=""> <i class="fa-solid fa-briefcase"></i>Become a Seller</a></li>
            <li><a href=""> More<i class="fa-solid fa-caret-down"></i></a></li>
            <li><a href=""><i class="fa-solid fa-cart-shopping"></i> Cart</a></li>
            
            
        </ul>
        </div>
        
    </header>
    <header id="list">
      <div id="menu">
          <ul>
            <li><a href=""> Electronics</a></li>
            <li><a href=""> TVs & Appliances</a></li>
            <li><a href=""> Men</a></li>
            <li><a href=""> Women</a></li>
            <li><a href=""> Baby & Kids</a></li>
            <li><a href=""> Home & Furniture</a></li>
            <li><a href=""> Sports,Books & More</a></li>
            <li><a href=""> Flights</a></li>
            <li><a href=""> Offer Zone</a></li>
          </ul>
        </div>
    </header>
    </div>
  )
}

export default Header