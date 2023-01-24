import {default as React,useState} from 'react';
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-scroll';
import {SiteLogo} from '../../global'

const Header = () => {

    const {fix, setFix} = useState(false);

    function SetFixed () {
        if(window.scrollY >= 100) {
            setFix(true);
        }else{
            setFix(false)
        }
    }
    window.addEventListener('scroll'.SetFixed);
    return (
        <header className={fix ? "header navbar_fixed" : "header"}>
            <div className='container'>
                <div className='row'>
                    <Navbar bg='none' expand='lg'>
                        <a></a>
                    </Navbar>
                </div>
            </div>

        </header>
    )
}