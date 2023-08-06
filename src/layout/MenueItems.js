import {
  UilAirplay,
  UilArrowGrowth,
  UilAt,
  UilBagAlt,
  UilBookAlt,
  UilBookOpen,
  UilBookReader,
  UilCalendarAlt,
  UilChartBar,
  UilChat,
  UilCheckSquare,
  UilCircle,
  UilClipboardAlt,
  UilClock,
  UilCompactDisc,
  UilCreateDashboard,
  UilDatabase,
  UilDocumentLayoutLeft,
  UilEdit,
  UilEnvelope,
  UilExchange,
  UilExclamationOctagon,
  UilFileShieldAlt,
  UilHeadphones,
  UilIcons,
  UilImages,
  UilLayerGroup,
  UilMap,
  UilPresentation,
  UilQuestionCircle,
  UilSearch,
  UilServer,
  UilSetting,
  UilSquareFull,
  UilTable,
  UilUsdCircle,
  UilUsersAlt,
  UilWindowSection,
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';
import { changeLayoutMode } from '../redux/themeLayout/actionCreator';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const dispatch = useDispatch();

  const path = '/admin';

  const pathName = window.location.pathname;
  const pathArray = pathName ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const changeLayout = (mode) => {
    dispatch(changeLayoutMode(mode));
  };
  const darkmodeActivated = () => {
    document.body.classList.add('dark-mode');
  };
  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark-mode');
  };

  const items = [
    getItem(t('dashboard'), 'dashboard', !topMenu && <UilCreateDashboard />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          {t('demo')} {t('1')}
        </NavLink>,
        'demo-1',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-2`}>
          {t('demo')} {t('2')}
        </NavLink>,
        'demo-2',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-3`}>
          {t('demo')} {t('3')}
        </NavLink>,
        'demo-3',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-4`}>
          {t('demo')} {t('4')}
        </NavLink>,
        'demo-4',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-5`}>
          {t('demo')} {t('5')}
        </NavLink>,
        'demo-5',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-6`}>
          {t('demo')} {t('6')}
        </NavLink>,
        'demo-6',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-7`}>
          {t('demo')} {t('7')}
        </NavLink>,
        'demo-7',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-8`}>
          {t('demo')} {t('8')}
        </NavLink>,
        'demo-8',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-9`}>
          {t('demo')} {t('9')}
        </NavLink>,
        'demo-9',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/demo-10`}>
          {t('demo')} {t('10')}
        </NavLink>,
        'demo-10',
        null,
      ),
    ]),
    getItem(t('layouts'), 'layout', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            darkmodeDiactivated();
            changeLayout('lightMode');
          }}
          to="#"
        >
          {t('light')} {t('mode')}
        </NavLink>,
        'light',
        null,
      ),
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            darkmodeActivated();
            changeLayout('darkMode');
          }}
          to="#"
        >
          {t('dark')} {t('mode')}
        </NavLink>,
        'dark',
        null,
      ),
    ]),
 
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('application')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
   
    getItem(t('Blogs'), 'blogs', !topMenu && <UilEnvelope />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/blogs/view`}>
          {t('Danh sách bài viết')}
        </NavLink>,
        'Danh sách bài viết',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/blogs/create`}>
          {t('Thêm mới')}
        </NavLink>,
        'Thêm mới',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/blogs/view/category`}>
          {t('Danh mục')}
        </NavLink>,
        'Danh mục',
        null,
      ),
    ]),
    // getItem(
    //   <NavLink onClick={toggleCollapsed} to={`${path}/main/chat/private/rofiq@gmail.com`}>
    //     {t('chat')}
    //   </NavLink>,
    //   'chat',
    //   !topMenu && (
    //     <NavLink className="menuItem-iocn" to={`${path}/main/chat/private/rofiq@gmail.com`}>
    //       <UilChat />
    //     </NavLink>
    //   ),
    // ),
    getItem(t('Lệnh'), 'project', !topMenu && <UilBagAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view`}>
          {t('Danh sách lệnh giao dịch')}
        </NavLink>,
        'projectList',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view/withdraw`}>
          {t('Danh sách lệnh rút')}
        </NavLink>,
        'projectListWidthdraw',
        null,
      ),
    ]),

    getItem(t('users'), 'users', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
          {t('add')} {t('user')}
        </NavLink>,
        'addUser',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/dataTable`}>
          {t('List')} {t('User')}
        </NavLink>,
        'user-dataTable',
        null,
      ),
    ]),
 
  
   
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Pages')}</NavTitle>,
      'page-title',
      null,
      null,
      'group',
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/settings`}>
        {t('settings')}
      </NavLink>,
      'settings',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/settings`}>
          <UilSetting />
        </NavLink>
      ),
    ),

 
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/banners`}>
        {t('banners')}
      </NavLink>,
      'banners',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/banners`}>
          <UilPresentation />
        </NavLink>
      ),
    ),
  
   
  
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
