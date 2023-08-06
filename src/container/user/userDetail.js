import { CardToolbox } from "../styled"
import { UserCarrdTop } from "../pages/style"
import { PageHeader } from "../../components/page-headers/page-headers"
import { Main } from "../styled"
import { Cards } from "../../components/cards/frame/cards-frame"
import { NavLink } from "react-router-dom"
import UilUser from "@iconscout/react-unicons/icons/uil-user"
import { AddUser } from "../pages/style"
import { Row, Col, Form, Input, Upload, Select, Button, Radio, Checkbox} from 'antd';
import { BasicFormWrapper } from "../styled"
import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserData, getUsersData, updateUserData } from "../../redux/users/actionCreator"
import { useEffect, useState } from "react"
import { withdrawCommand } from "../../redux/command/actionCreator"
import './userDetail.css'

function User(){
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const {user, loading} = useSelector((state) =>  { return{ user: state.user.data, loading: state.user.loading}})
    const users = useSelector((state) => state.users.data)
    const params = useParams();

    const [phoneUser, setPhoneUser] = useState('')
    const [bank, setBank] = useState('')
    const [code, setCode] = useState('')
    const [account, setAccount] = useState('')
    const [cashed, setCased] = useState('')
    const [rankUser, setrankUser] = useState('')
    const [canCash, setCanCash] = useState('')
    const [verifyUser, setverifyUser] = useState(false)
    const [input, setInput] = useState(false)
    const [withdraw, setWithDraw] = useState(0)


    const handleWithdraw =(id, value)=>{
        const data={
            user_id: id,
            value,
        }
        dispatch(withdrawCommand(data))
    }

    const handleSubmitUpdate = (id)=>{
        const values= {
            phone: phoneUser,
            refcode: code,
            bank_name: bank,
            bank_account: account,
            wallet_deposited: input,
            wallet_cashed: cashed,
            rank: rankUser,
            wallet_can_cash: canCash,
        }
        if(verifyUser){
            values.verify = 'Đã xác minh'
        }
        dispatch(updateUserData(id, values))
    }
    useEffect(() => {
        form.resetFields();
        dispatch(getUsersData());
        dispatch(getUserData(parseInt(params.id, 10)))
    }, [params.id, dispatch, user.phone]);
  if(user != undefined && users.length > 0 ){
    const { bank_account, bank_name, cccd_back, cccd_front, phone, rank, refcode, verify, wallet, wallet_buyed, wallet_can_cash, wallet_cashed, wallet_deposited, wallet_win  } = user;
    return (
        <CardToolbox>
            <UserCarrdTop>
                <PageHeader
                className="ninjadash-page-header-main"
                ghost
                title="User Information">
                    
                </PageHeader>
            </UserCarrdTop>
            <Main>
            <Row gutter={15}>
                <Col xs={24}>
                <AddUser>
                    <Cards headless>
                    <div className="card-nav">
                        <ul>
                        <li>
                            <NavLink style={{display:'block', paddingTop: '0'}} >
                            <UilUser />
                            Personal Info
                            </NavLink>
                        </li>
                        </ul>
                    </div>
                    <Row justify="center">
                        <Col xxl={10} xl={14} md={16} xs={24}>
                            <div className="user-info-form">
                                <BasicFormWrapper>
                                    <Form form={form} >
                                        {console.log(user)}
                                        <Form.Item label="Tên" name="name" initialValue={(users.length < 0) ? 'hihi' : users.find((obj) => obj.id == params.id).name}>
                                            <Input disabled placeholder="Nhập tên"  />
                                        </Form.Item>

                                        <Form.Item name="phone" label="Số điện thoại" >
                                            <Input  placeholder="Nhập số điện thoại" defaultValue={phone} onChange={(e)=>{setPhoneUser(e.target.value)}}  />
                                        </Form.Item>

                                        <Form.Item name="refcode" label="Mã giới thiệu" initialValue={refcode}>
                                            <Input placeholder="Nhập mã giới thiệu" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
                                        </Form.Item>
                                        <Form.Item name="rank" label="Bậc tài khoản" initialValue={rank ? rank : 'VIP 0'}>
                                            <Radio.Group  onChange={(e)=>{setrankUser(e.target.value)}} >
                                                <Radio value={'VIP 0'}>VIP 0</Radio>
                                                <Radio value={'VIP 1'}>VIP 1</Radio>
                                                <Radio value={'VIP 2'}>VIP 2</Radio>
                                                <Radio value={'VIP 3'}>VIP 3</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        <Form.Item name="bank" label="Tên ngân hàng" initialValue={bank_name}>
                                        <Select
                                            onChange={(e)=>{setBank(e)}}
                                            showSearch
                                            style={{
                                            width: '100%',
                                            marginLeft: 0
                                            }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={[
                                            {
                                                value: 'Techcombank',
                                                label: 'Techcombank',
                                            },
                                            {
                                                value: 'Sacombank',
                                                label: 'Sacombank',
                                            },
                                            {
                                                value: 'Vietcombank',
                                                label: 'Vietcombank',
                                            },
                                            {
                                                value: 'Asia Commercial Bank',
                                                label: 'Asia Commercial Bank',
                                            },
                                            {
                                                value: 'DongA Bank',
                                                label: 'DongA Bank',
                                            },
                                            {
                                                value: 'Vietin Bank',
                                                label: 'Vietin Bank',
                                            },
                                            {
                                                value: 'Bank for Investment and Development of Vietnam',
                                                label: 'Bank for Investment and Development of Vietnam',
                                            },
                                            {
                                                value: 'Eximbank',
                                                label: 'Eximbank',
                                            },
                                            {
                                                value: 'Bank Central Asia',
                                                label: 'Bank Central Asia',
                                            },
                                            {
                                                value: 'Bank Negara Indonesia',
                                                label: 'Bank Negara Indonesia',
                                            },
                                            {
                                                value: 'Bank Rakyat Indonesia',
                                                label: 'Bank Rakyat Indonesia',
                                            },
                                            {
                                                value: 'CIMB Niaga',
                                                label: 'CIMB Niaga',
                                            },
                                            {
                                                value: 'Vietnam Prosperity Joint-Stock Commercial Bank',
                                                label: 'Vietnam Prosperity Joint-Stock Commercial Bank',
                                            },
                                            {
                                                value: 'Military Commercial Joint Stock Bank',
                                                label: 'Military Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'Tien Phong Commercial',
                                                label: 'Tien Phong Commercial',
                                            },
                                            {
                                                value: 'Agribank',
                                                label: 'Agribank',
                                            },
                                            {
                                                value: 'Lien Viet Post Joint Stock Commercial Bank',
                                                label: 'Lien Viet Post Joint Stock Commercial Bank',
                                            },
                                            {
                                                value: 'Saigon - Hanoi Commercial Joint Stock Bank',
                                                label: 'Saigon - Hanoi Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'Vietnam Public Joint-stock Commercial Bank',
                                                label: 'Vietnam Public Joint-stock Commercial Bank',
                                            },
                                            {
                                                value: 'Saigon Bank',
                                                label: 'Saigon Bank',
                                            },
                                            {
                                                value: 'Southeast Asia Commercial Joint Stock Bank',
                                                label: 'Southeast Asia Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'Kien Long Commercial Joint Stock Bank',
                                                label: 'Kien Long Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'Nam A Commercial Joint Stock Bank',
                                                label: 'Nam A Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'National Citizen Commercial Joint Stock Bank',
                                                label: 'National Citizen Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'HD Bank',
                                                label: 'HD Bank',
                                            },
                                            {
                                                value: 'Orient Commercial Joint Stock Bank',
                                                label: 'Orient Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'Vietnam International Commercial Joint Stock Bank',
                                                label: 'Vietnam International Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'Sai Gon Joint Stock Commercial Bank',
                                                label: 'Sai Gon Joint Stock Commercial Bank',
                                            },
                                            {
                                                value: 'Saigon Bank for Industry and Trade',
                                                label: 'Saigon Bank for Industry and Trade',
                                            },
                                            {
                                                value: 'VietABank',
                                                label: 'VietABank',
                                            },
                                            {
                                                value: 'Bao Viet Bank',
                                                label: 'Bao Viet Bank',
                                            },
                                            {
                                                value: 'Vietnam Thuong Tin Commercial Joint Stock Bank',
                                                label: 'Vietnam Thuong Tin Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'Petrolimex Group Commercial Joint Stock Bank',
                                                label: 'Petrolimex Group Commercial Joint Stock Bank',
                                            },
                                            {
                                                value: 'BIDV',
                                                label: 'BIDV',
                                            },
                                            {
                                                value: 'MB Bank',
                                                label: 'MB Bank',
                                            },
                                            {
                                                value: 'SeaBank',
                                                label: 'SeaBank',
                                            },
                                            {
                                                value: 'Shinhan bank',
                                                label: 'Shinhan bank',
                                            },
                                            {
                                                value: 'ACB Bank',
                                                label: 'ACB Bank',
                                            },
                                            {
                                                value: 'VIP Bank',
                                                label: 'VIP Bank',
                                            },
                                            {
                                                value: 'PCcombank',
                                                label: 'PCcombank',
                                            },
                                            {
                                                value: 'VIB Bank',
                                                label: 'VIB Bank',
                                            }

                                            ]}
                                        />
                                        </Form.Item>
                                        <Form.Item name="account" label="Số tài khoản ngân hàng" initialValue={bank_account}>
                                            <Input placeholder="Nhập số tài khoản ngân hàng" value={account} onChange={(e)=>{setAccount(e.target.value)}}/>
                                        </Form.Item>
                                        <Form.Item name="wallet_input" label="Nạp tiền vào" >
                                            <Input placeholder="Nhập số tiền nạp"  onChange={(e)=>{setInput(e.target.value)}} />
                                        </Form.Item>
                                        <Form.Item name="wallet" label="Tổng tài sản" initialValue={wallet}>
                                            <Input placeholder="Nhập tổng tài sản" disabled/>
                                        </Form.Item>
                                        <Form.Item name="wallet_cashed" label="Số tiền đã rút" initialValue={wallet_cashed}>
                                            <Input placeholder="Nhập số tiền đã rút"  disabled/>
                                        </Form.Item>
                                        <Form.Item name="wallet_buyed" label="Số tiền đã đầu tư" initialValue={wallet_buyed}>
                                            <Input placeholder="Nhập số tiền đã đầu tư" disabled />
                                        </Form.Item>
                                        <Form.Item name="wallet_win" label="Thu nhập kiếm được" initialValue={wallet_win}>
                                            <Input placeholder="Nhập số thu nhập kiếm được" disabled />
                                        </Form.Item>
                                        <Form.Item name="wallet_can_cash" label="Số tiền có thể rút" initialValue={wallet_can_cash}>
                                            <Input placeholder="Nhập số tiền có thể rút" value={canCash} onChange={(e)=>{setCanCash(e.target.value)}} />
                                        </Form.Item>
                                      
                                        <div className="withdraw">
                                            <Form.Item name="withdraw" label="Rút tiền" >
                                                <Input placeholder="Nhập số tiền rút" value={withdraw} onChange={(e)=>{setWithDraw(e.target.value)}} />
                                                <Button
                                                    htmlType="submit" type="primary"
                                                    onClick={()=>{
                                                        handleWithdraw(params.id, withdraw)
                                                    }}
                                                >
                                                    Rút tiền
                                                </Button>
                                            </Form.Item>
                                           
                                        </div>
                                        <Form.Item name="verify" label="Xác minh tài khoản" >
                                                <Checkbox defaultChecked={verify} onChange={(e) => {
                                                setverifyUser(e.target.checked)
                                                }}>Đã xác minh</Checkbox>
                                            </Form.Item>
                                        <Form.Item>
                                            <div className="add-user-bottom text-right">
                                            <Button
                                                className="ant-btn ant-btn-light"
                                                onClick={() => {
                                                    return form.resetFields();
                                                }}
                                            >
                                                Reset
                                            </Button>
                                            <Button htmlType="submit" type="primary" onClick={()=>{handleSubmitUpdate(params.id)}}>
                                                Save
                                            </Button>
                                            </div>
                                        </Form.Item>
                                        {console.log(user)}

                                    </Form>
                                </BasicFormWrapper>
                           
                            </div>
                        </Col>
                    </Row>
                    </Cards>
                </AddUser>
                </Col>
            </Row>
            </Main>
        </CardToolbox>
    )
  } 
}
export default User