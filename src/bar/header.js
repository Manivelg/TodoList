import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { BsGrid1X2Fill, BsFillFolderFill } from "react-icons/bs";
import { TfiPlus, TfiSearch, TfiBell } from "react-icons/tfi";
import Sidemenu from '../bar/sidemenu';
import Menunav from './json/menunav.json';

function Header(props) {;

    const {hideSideMenu}= props;
    const [ShowMenu, SetShowMenu] = useState(false);
    const [searchvalue, Setsearchvalue] = useState();
    const [headNavstatus, SetHeadNavstatus] = useState(2);


    const Searchdata = (e) => {
        if(e.target.value !== '') {
            Setsearchvalue(e.target.value);
        }
    }

    // const ShowMenu=() => {
    // alert('hai');
    // }

  return (

    <>
    <section id="header_menu">
        <div className='dashboard_menu'>

            <div className='hidden'>
                <div className='menu_bar' onClick={() => {SetShowMenu(!ShowMenu)}}>
                  <FiMenu />
                </div>
            </div>

            <div className='left_one'>
                <div className='short_one'>
                    <div className='menu_bars'>
                        <FiMenu />
                    </div>
                </div>

                
                {/* <div className='short_two'>
                    <BsGrid1X2Fill />
                    <span className='head_para'>Dashboard</span>
                </div>

                <div className='short_two'>
                    <BsFillFolderFill />
                    <span className='head_para'>Collections</span>
                </div> */}

                {
                    Menunav.map( (response,index)=> (

                        <Link to={response.link} className={ headNavstatus == response.id ? 'short_two short_two--active' : 'short_two'}  key= {response.id} onClick={() => SetHeadNavstatus(response.id)}
                        >
                            <img src={response.image} alt="MenuIcon" className='menunav_icon' />
                            <span className='head_para'>{response.header}</span>
                        </Link>
                    ))
                }

            </div>

            <div className='left_one'>
            {/* <div className='short_one'>
                    <div className='add_button'>
                        <TfiPlus />
                    </div>
                </div> */}

                <div className='short_four'>
                    <span className='search'>
                         <TfiSearch className='search_icon'/>
                         <input 
                                type='search' 
                                placeholder='Task Name' 
                                className='search_task'
                                value={searchvalue}
                                onChange={Searchdata}
                                />
                    </span>
                </div>

                <div className='short_three'>
                    <span className='pointer'>
                        <TfiBell className='top_set'/>
                    </span>
                </div>

                <div className='short_three'>
                    <span className='user_blog'>
                        <img src='../../user/user.jpg' alt='User' className='user_logo' />
                    </span>
                </div>
            </div>

            
        </div>
    </section>

    <section id="add_mobile_show">
    <div className='hidden'>
                <div className='mobile_set'>
                    <div className='add_button add_users'>
                        <TfiPlus />
                    </div>
                </div>
            </div>
    </section>
    <div className={`${ShowMenu ? "not_show" : "show"}`}>
        
        {
            !hideSideMenu && 
        <Sidemenu />
        }
    </div>
    
    </>
    
  )
}

export default Header