import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Select, Radio } from 'antd';
import { Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { useDispatch, useSelector } from 'react-redux';
import { FigureWizards, WizardWrapper, OrderSummary, WizardFive } from '../Style';
import { Modal } from '../../../../components/modals/antd-modals';
import { Steps } from '../../../../components/steps/steps';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../../styled';
import { cartGetData, cartUpdateQuantity, cartDelete } from '../../../../redux/cart/actionCreator';

const { Option } = Select;
function WizardsFive() {
  const dispatch = useDispatch();
  const { cartData, rtl } = useSelector((state) => {
    return {
      cartData: state.cart.data,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    visible: true,
  });

  const { status, isFinished, visible } = state;

  const handleOk = () => {
    setState({
      ...state,
      status: 'process',
      isFinished: false,
      visible: false,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      status: 'process',
      isFinished: false,
      visible: false,
    });
  };

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const incrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) + 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const decrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const cartDeleted = (id) => {
    const confirm = window.confirm('Are you sure to delete this product?');
    if (confirm) dispatch(cartDelete(id, cartData));
  };

  const next = () => {
    setState({
      ...state,
      status: 'process',
    });
  };

  const prev = () => {
    setState({
      ...state,
      status: 'process',
    });
  };

  const done = () => {
    const confirm = window.confirm('Are sure to submit order?');
    if (confirm) {
      setState({
        ...state,
        status: 'finish',
        isFinished: true,
        visible: true,
      });
    }
  };

  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const dataSource = [];

  let subtotal = 0;

  if (cartData !== null) {
    cartData.map((data) => {
      const { id, img, name, quantity, price, size, color } = data;
      subtotal += parseInt(quantity, 10) * parseInt(price, 10);
      return dataSource.push({
        key: id,
        product: (
          <div className="cart-single">
            <FigureWizards>
              <img style={{ width: 80 }} src={require(`../../../../${img}`)} alt="" />
              <figcaption>
                <div className="cart-single__info">
                  <Heading as="h6">{name}</Heading>
                  <ul className="info-list">
                    <li>
                      <span className="info-title">Size :</span>
                      <span>{size}</span>
                    </li>
                    <li>
                      <span className="info-title"> Color :</span>
                      <span>{color}</span>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </FigureWizards>
          </div>
        ),
        price: <span className="cart-single-price">${price}</span>,
        quantity: (
          <div className="cart-single-quantity">
            <Button onClick={() => decrementUpdate(id, quantity)} className="btn-dec" type="default">
              <UilMinus />
            </Button>
            {quantity}
            <Button onClick={() => incrementUpdate(id, quantity)} className="btn-inc" type="default">
              <UilPlus />
            </Button>
          </div>
        ),
        total: <span className="cart-single-t-price">${quantity * price}</span>,
        action: (
          <div className="table-action">
            <Button
              onClick={() => cartDeleted(id)}
              className="btn-icon"
              to="#"
              size="default"
              type="danger"
              shape="circle"
              transparented
            >
              <UilTrashAlt />
            </Button>
          </div>
        ),
      });
    });
  }
  return (
    <div className="wizard-side-border">
      <WizardWrapper className="ninjadash-wizard-page bordered-wizard">
        <WizardFive>
          <Steps
            isvertical
            isswitch
            current={0}
            status={status}
            direction="vertical"
            steps={[
              {
                title: (
                  <>
                    <h2>Create Account</h2>
                    <p>Setup Your Account Details</p>
                  </>
                ),
                content: (
                  <BasicFormWrapper className="basic-form-inner theme-light">
                    <div className="atbd-form-checkout">
                      <Row justify="center">
                        <Col xs={24}>
                          <div className="create-account-form">
                            <Heading as="h4">1. Please Create Your Account</Heading>
                            <Form form={form} name="account">
                              <Form.Item name="username" label="Username">
                                <Input placeholder="Username" />
                              </Form.Item>
                              <Form.Item name="email" rules={[{ type: 'email' }]} label="Email Address">
                                <Input placeholder="name@gmail.com" />
                              </Form.Item>
                              <Form.Item
                                name="password"
                                rules={[
                                  {
                                    min: 6,
                                    message: 'Enter a valid password. Min 6 characters long.',
                                  },
                                ]}
                                label="Password"
                              >
                                <Input.Password placeholder="Password" />
                              </Form.Item>
                              <span className="input-message">Enter a valid password. Min 6 characters long</span>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </BasicFormWrapper>
                ),
              },
              {
                title: (
                  <>
                    <h2>Shipping Address</h2>
                    <p>Choose Your Location</p>
                  </>
                ),
                content: (
                  <BasicFormWrapper className="basic-form-inner theme-light">
                    <div className="atbd-form-checkout">
                      <Row justify="center">
                        <Col xs={24}>
                          <div className="shipping-form">
                            <Heading as="h4">2. Please Fill in Your Shipping Address</Heading>
                            <Form form={form} name="address">
                              <Form.Item name="name" label="Contact Name">
                                <Input placeholder="Ibn adam" />
                              </Form.Item>
                              <Form.Item
                                name="company"
                                label={
                                  <span>
                                    Company Name <span>(Optional)</span>
                                  </span>
                                }
                              >
                                <Input placeholder="adam" />
                              </Form.Item>
                              <Form.Item name="phone" label="Phone Number">
                                <Input placeholder="+880" />
                              </Form.Item>
                              <Form.Item name="country" initialValue="" label="Country/Region">
                                <Select style={{ width: '100%' }}>
                                  <Option value="">Please Select</Option>
                                  <Option value="bangladesh">Bangladesh</Option>
                                  <Option value="india">India</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item name="street" label="Street Address">
                                <Input placeholder="House Number and Street Name" />
                              </Form.Item>
                              <Form.Item name="street2" label="">
                                <Input placeholder="Apartment, Suite, Unit etc." />
                              </Form.Item>
                              <Form.Item name="city" label="City">
                                <Input placeholder="Enter City" />
                              </Form.Item>
                              <Form.Item name="zip" label="Zip/Postal Code">
                                <Input placeholder="Enter Zip" />
                              </Form.Item>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </BasicFormWrapper>
                ),
              },
              {
                title: (
                  <>
                    <h2>Payment Method</h2>
                    <p>Use Credit or Debit Cards</p>
                  </>
                ),
                content: (
                  <BasicFormWrapper className="basic-form-inner theme-light">
                    <div className="atbd-form-checkout">
                      <Row justify="center">
                        <Col xs={24}>
                          <div className="payment-method-form theme-light">
                            <Heading as="h4">3. Please Please Select Your Payment Method</Heading>
                            <div className="shipping-selection">
                              <Radio.Group style={{ width: '100%' }}>
                                <div className="shipping-selection__card">
                                  <Cards headless>
                                    <div className="supported-card d-flex">
                                      <span>Credit/Debit Card</span>
                                      <div className="supported-card_logos">
                                        <img
                                          style={{ width: '50px' }}
                                          src={require('../../../../static/img/cards-logo/ms.png')}
                                          alt=""
                                        />
                                        <img
                                          style={{ width: '50px' }}
                                          src={require('../../../../static/img/cards-logo/american-express.png')}
                                          alt=""
                                        />
                                        <img
                                          style={{ width: '50px' }}
                                          src={require('../../../../static/img/cards-logo/visa.png')}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <Form form={form} name="info">
                                      <Form.Item name="number" label="Card Number">
                                        <Input placeholder="6547-8702-6987-2527" />
                                      </Form.Item>
                                      <Form.Item name="name" label="Name on Card">
                                        <Input placeholder="Full name" />
                                      </Form.Item>
                                      <Form.Item name="month" initialValue="" label="Expiration Date">
                                        <div className="ex-date-year-wrap d-flex">
                                          <div className="ex-date">
                                            <Select style={{ width: '100%' }}>
                                              <Option value="">MM</Option>
                                              {month.map((value) => (
                                                <Option key={value} value={value}>
                                                  {value}
                                                </Option>
                                              ))}
                                            </Select>
                                          </div>
                                          <div className="ex-year">
                                            <Select style={{ width: '100%' }}>
                                              <Option value="">YY</Option>
                                              <Option value={new Date().getFullYear()}>
                                                {new Date().getFullYear()}
                                              </Option>
                                              {month.map((value) => (
                                                <Option
                                                  key={value}
                                                  value={parseInt(new Date().getFullYear(), 10) + parseInt(value, 10)}
                                                >
                                                  {parseInt(new Date().getFullYear(), 10) + parseInt(value, 10)}
                                                </Option>
                                              ))}
                                            </Select>
                                          </div>
                                        </div>
                                      </Form.Item>
                                      {/* <Form.Item name="year" initialValue="">
                                        
                                      </Form.Item> */}
                                      <Form.Item name="cvv" label="CVV">
                                        <div className="cvv-wrap">
                                          <Input style={{ width: '60%' }} placeholder="XXX" />
                                          <Link className="input-leftText" to="#" />
                                        </div>
                                      </Form.Item>
                                    </Form>
                                  </Cards>
                                </div>
                              </Radio.Group>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </BasicFormWrapper>
                ),
              },
              {
                title: (
                  <>
                    <h2>Review Order</h2>
                    <p>Review and Submit</p>
                  </>
                ),
                content:
                  status !== 'finish' ? (
                    <BasicFormWrapper style={{ width: '100%' }}>
                      <div
                        className="atbd-review-order theme-light"
                        style={{ width: '100%', marginBottom: '0px !important' }}
                      >
                        <Heading as="h4">4. Review and confirm Order</Heading>
                        <Cards headless>
                          <div className="atbd-review-order__single">
                            <Cards headless>
                              <div className="atbd-review-order__shippingTitle">
                                <Heading as="h5">
                                  Shipping Information
                                  <Link to="#">
                                    <UilEdit />
                                    Edit
                                  </Link>
                                </Heading>
                              </div>
                              <article className="atbd-review-order__shippingInfo">
                                <Radio.Group style={{ width: '100%' }}>
                                  <Radio value="ms" style={{ width: '100%' }}>
                                    <div className="shipping-info-text">
                                      <Heading as="h6">Ibn Adam</Heading>
                                      <Heading as="h6">Phone: +61412345678</Heading>
                                      <p>
                                        795 Folsom Ave, Suite 600 <br />
                                        San Francisco, CA 94107 <br />
                                        United States
                                      </p>
                                    </div>
                                  </Radio>
                                </Radio.Group>
                                <Link className="btn-addNew" to="#">
                                  + Add New Address
                                </Link>
                              </article>
                            </Cards>
                          </div>
                          <div className="atbd-review-order__single">
                            <Cards headless>
                              <div>
                                <Heading as="h5">Payment Method</Heading>
                              </div>
                              <Radio.Group style={{ width: '100%' }}>
                                <Radio value="ms" style={{ width: '100%' }}>
                                  <div className="method-info">
                                    <img src={require('../../../../static/img/ms.svg')} alt="" />
                                    **** **** **** 2597
                                  </div>
                                </Radio>
                              </Radio.Group>
                              <Link className="btn-addCard" to="#">
                                + Add New Card
                              </Link>
                            </Cards>
                          </div>

                          <div className="atbd-review-order__single">
                            <Cards headless style={{ marginBottom: '0' }}>
                              <>
                                <Row justify="end">
                                  <Col sm={14} xs={24} offset={!rtl ? 10 : 0}>
                                    <OrderSummary>
                                      <div className="invoice-summary-inner">
                                        <ul className="summary-list">
                                          <li>
                                            <span className="summary-list-title">Subtotal :</span>
                                            <span className="summary-list-text">{`$${subtotal}`}</span>
                                          </li>
                                          <li>
                                            <span className="summary-list-title">Discount :</span>
                                            <span className="summary-list-text">{`$${-20}`}</span>
                                          </li>
                                          <li>
                                            <span className="summary-list-title">Shipping Charge :</span>
                                            <span className="summary-list-text">{`$${30}`}</span>
                                          </li>
                                        </ul>
                                        <Heading className="summary-total" as="h4">
                                          <span className="summary-total-label">Total : </span>
                                          <span className="summary-total-amount">{`$${subtotal + 30 - 20}`}</span>
                                        </Heading>
                                      </div>
                                    </OrderSummary>
                                  </Col>
                                </Row>
                              </>
                            </Cards>
                          </div>
                        </Cards>
                      </div>
                    </BasicFormWrapper>
                  ) : (
                    <Modal footer={null} type="primary" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                      <Row justify="center" style={{ width: '100%' }}>
                        <Col xl={20} xs={24}>
                          <Cards headless>
                            <div className="submission-successModal">
                              <span className="icon-success">
                                <UilCheck />
                              </span>
                              <p>All is good! Please confirm the form submission.</p>
                              <div className="submission-action">
                                <Button type="primary" onClick={handleOk}>
                                  Submit
                                </Button>
                                <Button type="light">Cancel</Button>
                              </div>
                            </div>
                          </Cards>
                        </Col>
                      </Row>
                    </Modal>
                  ),
              },
            ]}
            onNext={next}
            onPrev={prev}
            onDone={done}
            isfinished={isFinished}
          />
        </WizardFive>
      </WizardWrapper>
    </div>
  );
}

export default WizardsFive;
