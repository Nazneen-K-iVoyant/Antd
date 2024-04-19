import React from 'react'
import { Menu, Layout, Card, Typography, Space, Divider, Row, Col, Image, Table, Form, Input, Button } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
// import "./styles/dashboard.css"
import "../styles/dashboard.css"

import { HiOutlineHome } from 'react-icons/hi';
import { GrOrganization, GrStatusGood } from 'react-icons/gr'
import { BsGraphUp, BsGraphUpArrow, BsPerson } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { AiOutlineMoneyCollect } from 'react-icons/ai'
import { RiPieChart2Fill } from 'react-icons/ri'
import { BiTachometer } from 'react-icons/bi'
import { MdOutlineTimer } from 'react-icons/md'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoNewspaperOutline } from 'react-icons/io5'
import { PiShareNetwork } from 'react-icons/pi'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import { Navigate } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from '@faker-js/faker'
import { Faker, faker } from '@faker-js/faker'
import { Link } from 'react-router-dom'


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    // {
    //   label: 'Dataset 1',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// const [collapsed, setCollapsed] = useState<boolean>(false)

const dataSource = [
  {
    key: '1',
    project: 'Intern',
    date: 32,
    startTime: '10 Downing Street',
    stopTime: '11:29:34',
    duration: '05:30:13'
  },
  {
    key: '2',
    project: 'Intern',
    date: 42,
    startTime: '10 Downing Street',
    stopTime: '14:30:27',
    duration: '05:30:13'
  },
  // {
  //   key: '2',
  //   project: 'Intern',
  //   date: 42,
  //   startTime: '10 Downing Street',
  //   stopTime: '14:30:27',
  //   duration: '03:20:23'
  // },
  // {
  //   key: '2',
  //   project: 'Intern',
  //   date: 42,
  //   startTime: '10 Downing Street',
  //   stopTime: '14:30:27',
  //   duration: '05:30:13'
  // }
];

const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Start time',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: 'Stop Time',
    dataIndex: 'stopTime',
    key: 'stopTime',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
];



const Home = () => {
  return (
    <>

      <Layout >
        {/* <Sider collapsed={collapsed} theme='light'> */}
        <Sider theme='light' width='300px' >
          <img src="https://seekvectorlogo.com/wp-content/uploads/2019/01/hubstaff-vector-logo-small.png" alt="" width={150} height={150} style={{ marginLeft: '30px' }} />
          {/* <Menu
             onClick={({key})=>{Navigate(key)}}
            mode='inline'
            items={
              [
                {

                  label: "Dashboard",
                  key: "/",
                  icon: <BiTachometer style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '18px', color: '#31363F' }
          
                  // children: [{
                  //   label: "Add Profile",
                  //   key: "add_profile",
                  //   icon: <BsPerson />
                  // }]
                },
                {
                  label: "Timesheets",
                  key: "/timeSheets",
                  icon: <MdOutlineTimer style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '18px', color: '#31363F' }
                },
                {
                  label: "Activity",
                  key: "activity",
                  icon: <BsGraphUp style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '18px', color: '#31363F' },
                
                },
                {
                  label: "Insights",
                  key: "/insights",
                  icon: <FaRegLightbulb style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '16px', lineHeight: 1.45, color: '#31363F' }
                },
                {
                  label: "Project Management",
                  key: '/projectManagement',
                  icon: <GrStatusGood style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '16px', lineHeight: 1.45, color: '#31363F' }

                },
                {
                  label: 'Reports',
                  key: '/reports',
                  icon: <IoNewspaperOutline style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '16px', lineHeight: 1.45, color: '#31363F' }
                },
                {
                  label: 'Teams',
                  key: '/teams',
                  icon: <PiShareNetwork style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '16px', lineHeight: 1.45, color: '#31363F' }
                },
                {
                  label: 'Expenses',
                  key: '/expenses',
                  icon: <LiaFileInvoiceDollarSolid style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />,
                  style: { fontSize: '16px', lineHeight: 1.45, color: '#31363F' }
                }
              ]
            } /> */}

          <Menu mode='inline'>
            <Menu.Item key="home" icon={<BiTachometer style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />}>
              <Link to="/"><span style={{ fontSize: '18px', color: '#31363F' }} >Dashboard</span></Link>
            </Menu.Item>

            <Menu.Item key="timesheet" icon={<MdOutlineTimer style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />}  >
              <Link to='timesheet' ><span style={{ fontSize: '18px', color: '#31363F' }}> Timesheets</span></Link>
            </Menu.Item>

            <Menu.Item key="activity" icon={<MdOutlineTimer style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />}  >
              <Link to='activity' ><span style={{ fontSize: '18px', color: '#31363F' }}> Activity</span></Link>
            </Menu.Item>

            


            {/* <Menu.SubMenu title="Activity" icon={<BsGraphUp style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />}>
              <Menu.Item key="activity">
                <Link to='/activity'><span style={{ fontSize: '18px', color: '#31363F' }}>Activity</span></Link>
              </Menu.Item>
              <Menu.Item>Screenshots</Menu.Item>
              <Menu.Item>Apps</Menu.Item>
              <Menu.Item>Urls</Menu.Item>
            </Menu.SubMenu> */}

            <Menu.Item key='insights' icon={<FaRegLightbulb style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />} >
              <Link to="insights"><span style={{ fontSize: '18px', color: '#31363F' }} >Insights</span></Link>
            </Menu.Item>

            <Menu.Item key='projectManagement' icon={<GrStatusGood style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />} >
              <Link to='projectManagement' ><span style={{ fontSize: '18px', color: '#31363F' }} >Project management</span></Link>
            </Menu.Item>

            <Menu.Item key='reports' icon={<IoNewspaperOutline style={{ fontSize: '22px', color: 'gray', fontWeight: 'bold' }} />} >
              <Link to='reports' ><span style={{ fontSize: '18px', color: '#31363F' }} >Reports</span></Link>
            </Menu.Item>

            <Menu.Item key='teams' icon={<PiShareNetwork style={{ fontSize: '26px', color: 'gray', fontWeight: 'bold' }} />}>
              <Link to='teams' > <span style={{ fontSize: '18px', color: '#31363F' }} >Teams</span></Link>
            </Menu.Item>


          </Menu>



        </Sider>

        <Content className='content'  >

          <div className="dashboard-title">
            <Typography.Title>Dashboard</Typography.Title>
            <Typography.Paragraph> Mon, Apr 15, 2024 - Sun, Apr 21, 2024
            </Typography.Paragraph>
          </div>


          <Space direction='horizontal' >
            <Card className='card-container' >
              <Space direction='horizontal' >
                <AiOutlineMoneyCollect className='icon-container' />
                <small>WEEKLY ACTIVITY</small>
              </Space>
              {/* <Typography.Title>
                ₹63780
              </Typography.Title> */}
              <h1>72%</h1>
            </Card>
          </Space>

          <Space direction='horizontal' >
            <Card className='card-container' >
              <Space direction='horizontal' >
                <BsGraphUpArrow className='icon-container' />
                <small>WORKED THIS WEEK</small>
              </Space>
              <h1>15:34:21</h1>
            </Card>
          </Space>

          <Space direction='horizontal' >
            <Card className='card-container' >
              <Space direction='horizontal' >
                <RiPieChart2Fill className='icon-container'/>
                <small>EARNED THIS WEEK</small>
              </Space>
              <Typography.Title>
                ₹454
              </Typography.Title>
            </Card>
          </Space>


          <Space direction='horizontal' >
            <Card className='card-container' >
              <Space direction='horizontal' >
                <RiPieChart2Fill className='icon-container' />
                <small>PROJECTS WORKED </small>
              </Space>
              <h1>
                Intern
              </h1>
            </Card>
          </Space>



          <Divider />

          <Row>

            <Col span={12} >
              <Card className='recentActivity-container' >
                {/* <Typography.Title>Recent Activity</Typography.Title> */}
                {/* <Typography.Text>Recent Activity</Typography.Text> */}
                <h2>Recent Activity</h2>
                <div className="image-grid">
                  <Image src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/videoblocks-coding-javascript-reactor-screen-fast_b2iikvpdw_thumbnail-1080_01.png' width={150} />
                  <Image src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/videoblocks-coding-javascript-reactor-screen-fast_b2iikvpdw_thumbnail-1080_01.png' width={150} />
                  <Image src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/videoblocks-coding-javascript-reactor-screen-fast_b2iikvpdw_thumbnail-1080_01.png' width={150} />
                  <Image src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/videoblocks-coding-javascript-reactor-screen-fast_b2iikvpdw_thumbnail-1080_01.png' width={150} />
                  <Image src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/videoblocks-coding-javascript-reactor-screen-fast_b2iikvpdw_thumbnail-1080_01.png' width={150} />
                  <Image src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/videoblocks-coding-javascript-reactor-screen-fast_b2iikvpdw_thumbnail-1080_01.png' width={150} />
                </div>
              </Card>
            </Col>

            <Col span={12} >
              <Card className='timeSheet-container' >
                <h2>Timesheet</h2>

                <Table dataSource={dataSource} columns={columns} />

              </Card>
            </Col>
          </Row>

          <Row>

            <Col span={12}  >
              <Card className='thisWeek-container' >
                <h2>This Week</h2>
                <Bar options={options} data={data} />;
              </Card>
            </Col>

            <Col span={12}  >
              <Card className='projects-container' >
                <h2>Projects</h2>
                <Table dataSource={dataSource} columns={columns} />
              </Card>

            </Col>

          </Row>

          <Row>
            <Col span={12}  >
              jgvhg
            </Col>

            <Col span={12}  >
              bjhhv
            </Col>
          </Row>
          {/* 
          <Form onFinish={(values)=>{console.log(values)}} >
            <Form.Item name={"name"}  label='Name'> <Input/>  </Form.Item>
            <Form.Item name={"email"} label='Email' > <Input type='email' /></Form.Item>
            <Form.Item  name={"password"} label='Password' ><Input type='password' /></Form.Item>
            <Form.Item><Button htmlType='submit'  type='primary'  >Sign up</Button></Form.Item>
          </Form> */}

        </Content>
      </Layout>

    </>
  )
}

export default Home