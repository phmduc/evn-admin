import React, { useState, lazy, Suspense } from 'react';
import { Row, Col, Pagination, Skeleton } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import { UsercardWrapper, UserCarrdTop } from '../pages/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Table } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersData } from '../../redux/users/actionCreator';
import { useEffect } from 'react';
import { TableWrapper } from '../styled';
import { UserTableStyleWrapper } from '../pages/style';   
import Heading from '../../components/heading/heading';

function Users() {

  const dispatch = useDispatch();
  
  const {  users } = useSelector((state) => {
    return {
      users: state.users.data,
    };
  });
  useEffect(()=>{
    dispatch(getUsersData())
  },[dispatch])


  const path = '.';

  console.log(users)

  const [state, setState] = useState({
    current: 0,
    pageSize: 0,
    page: 0,
  });

  const { notData } = state;

  // const handleSearch = (searchText) => {
  //   const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
  //   setState({
  //     ...state,
  //     notData: data,
  //   });
  // };

  // const onShowSizeChange = (current, pageSize) => {
  //   setState({ ...state, current, pageSize });
  // };

  // const onChange = (page) => {
  //   setState({ ...state, page });
  // };
    let usersTableData= []
    console.log(users)
    users.map((user) => {
    const { id, name, description, meta: {phone}, } = user;
      console.log(name)
    return usersTableData.push({
      key: id,
      user: (
        <div className="user-info">
          <figcaption>
            <Heading className="user-name" as="h6">
              <Link to={`/admin/user/${id}`}>
                {name}
              </Link>
            </Heading>
          </figcaption>
        </div>
      ),
      action: (
        <div className="table-actions">
          <Link className="btn-icon" type="info" to={`/admin/user/${id}`} shape="circle">
            <UilEdit />
          </Link>
          <Button className="btn-icon" type="danger" to="#" shape="circle">
            <UilTrashAlt />
          </Button>
        </div>
      ),
    });
  });

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
 
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];


  return (
    <>
      <CardToolbox>
        <UserCarrdTop>
          <PageHeader
            className="ninjadash-page-header-main"
            ghost
            title="Users Card"
            subTitle={
              <>
                <span className="title-counter">{users.length} Users </span>
                <AutoComplete
                  // onSearch={handleSearch}
                  // dataSource={notData}
                  placeholder="Search by Name"
                  width="100%"
                  patterns
                />
              </>
            }
            buttons={[
              <Button className="btn-add_new" size="default" type="primary" key="1">
                <Link to="/admin/users/add-user/info">
                  <UilPlus /> Add New User
                </Link>
              </Button>,
             
            ]}
          />
        </UserCarrdTop>
      </CardToolbox>
      <Main>
        <UsercardWrapper>
          <Row gutter={25}>
            <>
              <Cards headless>
                <UserTableStyleWrapper>
                  <TableWrapper className="table-responsive">
                    <Table
                      dataSource={usersTableData}
                      columns={usersTableColumns}
                      // pagination={{
                      //   defaultPageSize: 5,
                      //   total: usersTableData.length,
                      //   showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                      // }}
                    />
                  </TableWrapper>
                </UserTableStyleWrapper>
              </Cards>
              {/* <Col xs={24}>
                <div className="user-card-pagination">
                  <Pagination
                    showSizeChanger
                    defaultCurrent={6}
                    total={500}
                  />
                </div>
              </Col> */}
            </>
          </Row>
        </UsercardWrapper>
      </Main>
    </>
  );
}

export default Users;
