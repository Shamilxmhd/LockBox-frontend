import React from 'react'
import Card from 'react-bootstrap/Card';
import '../pricingCard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddPricing() {

    const handlePlan = () => {
        toast.success("Plan Selected")
    }

    return (
        <>
            {/* cards */}
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <Card className='pricing-card mb-3' style={{ width: '23rem' }}>
                    <Card.Body className='text-center'>
                        <h5></h5>
                        <h4 className="mb-2" style={{ fontWeight: '12px', color: 'black' }}>Free</h4>
                        <span className="mb-2 fs-2 fw-bold" style={{ color: '#ED7117' }}>$0</span>
                        <Card.Text className='mt-4'>
                            <p className='text-black'>Secure passwords and enjoy Locker's essential features.</p>
                            <ul className='text-start mt-4'>
                                <li>• Unlimited storage</li>
                                <li>• Autofill on the go</li>
                                <li>• Emergency access</li>
                                <li>• Private email (unlimited aliases)</li>
                                <li>• Family member (up to 6 members)</li>
                                <li>• Emergency access</li>
                                <li>• Secure item sharing</li>
                            </ul>
                            <button className='btn btn-success disabled'>Choose this plan</button>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card className='pricing-card mb-3' style={{ width: '23rem' }}>
                    <Card.Body className='text-center'>
                        <h5>Most Popular</h5>
                        <hr />
                        <h4 className="mb-2" style={{ fontWeight: '12px', color: 'black' }}>Premium</h4>
                        <span className="mb-2  fw-bold"><span className='me-2 ms-4'><s>$3.14</s></span><span className='fs-2' style={{ color: '#ED7117' }}>$1.80</span> / mo / 1per</span>
                        <Card.Text className='mt-4'>
                            <p className='text-black'>Enhance experiences with additional utility features.</p>
                            <ul className='text-start mt-4'>
                                <li>• Unlimited storage</li>
                                <li>• Autofill on the go</li>
                                <li>• Emergency access</li>
                                <li>• Private email (unlimited aliases)</li>
                                <li>• Family member (up to 6 members)</li>
                                <li>• Emergency access</li>
                                <li>• Secure item sharing</li>
                            </ul>
                            <button onClick={handlePlan} className='btn btn-success'>Choose this plan</button>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card className='pricing-card mb-3' style={{ width: '23rem' }}>
                    <Card.Body className='text-center'>
                        <h5></h5>
                        <h4 className="mb-2" style={{ fontWeight: '12px', color: 'black' }}>Family</h4>
                        <span className="mb-2  fw-bold"><span className='me-2 ms-4'><s>$9.99</s></span><span className='fs-2' style={{ color: '#ED7117' }}>$6.54</span> / mo / 1per</span>
                        <Card.Text className='mt-4'>
                            <p className='text-black'>Get the most out of Locker with unlimited storage.</p>
                            <ul className='text-start mt-4'>
                                <li>• Unlimited storage</li>
                                <li>• Autofill on the go</li>
                                <li>• Emergency access</li>
                                <li>• Private email (unlimited aliases)</li>
                                <li>• Family member (up to 6 members)</li>
                                <li>• Emergency access</li>
                                <li>• Secure item sharing</li>
                            </ul>
                            <button onClick={handlePlan} className='btn btn-success'>Choose this plan</button>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddPricing