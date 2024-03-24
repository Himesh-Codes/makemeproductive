import "../assets/css/slide-menu.css";
import { IMenuProps } from "../interfaces/IMenu";

export default function SlideMenu (menuProps: IMenuProps): JSX.Element{
    return (
        <nav>
          <ul className="navGroup">
            <li>
              <div className='slidingMenu'>
                <a href="#" className='editmode' onClick={(event) => handleClickEvent(event, menuProps, false)}><span>EDIT</span></a>
                <a href="#" className='viewmode' onClick={(event) => handleClickEvent(event, menuProps, true)}><span>VIEW</span></a>
                <div className='background'></div>
              </div>
            </li>
          </ul>
        </nav>
    );
}

function handleClickEvent(event: React.MouseEvent, menuProps: IMenuProps, isViewClicked: boolean){
    event.preventDefault();
    menuProps.changeViewFocus(isViewClicked);
}