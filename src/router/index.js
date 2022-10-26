import Home from '../page/home/profile/profile';
import edit_profile from '../component/edit-profile/edit_profile';
import company from '../component/company/company';
import career from '../component/career_position/career';
import hash_url from '../component/hash_url/hash_url';
import from_lang from '../component/language/from_lang';
import contact_user from '../component/contact/contact_user';
import form_report from '../component/form_report/report_template'; 
import form_group from '../component/form_group/form_group';
import appearance from '../component/appearance/appearance';
import add_contact from '../component/add_contact/add_contact';
import phonenumber from '../component/form_contact/phonenumber/phonenumber';
import email from '../component/form_contact/email/email';
import bank from '../component/form_contact/bank/bank';
import ecommerce from '../component/form_contact/ecommerce/ecommerce';
import ineternet from '../component/form_contact/internet/internet';
import service from '../component/form_contact/service/service';
import taxcode from '../component/form_contact/taxcode/taxcode';
import Address from '../component/form_contact/address/address';
import Website from '../component/form_contact/website/website';
import Qr_code from '../component/QR_code/qr_code';
import login from '../page/login/login';
import Calendar1 from '../component/calendar/calendar';



const publicRoutes = [
    {path: '/', component: Home}, //trang chủ thông tin
    {path: '/edit_profile', component: edit_profile}, //trang chủ thông tin
    {path: '/company', component: company}, //thông tin công ty
    {path: '/career', component: career}, //trang chức vụ
    {path: '/hash_url', component: hash_url}, //trang tên ngươi dùng
    {path: '/from_lang', component: from_lang}, //trang ngôn ngữ
    {path: '/contact_user', component: contact_user}, //trang số điện thoại


    {path: '/form_report', component: form_report}, //trang Report
    {path: '/form_group', component: form_group}, //trang Group
    {path: '/appearance', component: appearance}, //trang theme
    {path: '/add_contact', component: add_contact}, //trang add_contact
    
    // trang thông tin bên add_contact
    {path: '/phonenumber', component: phonenumber}, //trang Report
    {path: '/email', component: email}, //trang email
    {path: '/bank', component: bank}, //trang bank
    {path: '/ecommerce', component: ecommerce}, //trang thương mai 
    {path: '/ineternet', component: ineternet}, //trang mạng
    {path: '/service', component: service}, //trang dịch vụ 
    {path: '/taxcode', component: taxcode}, //trang thuế
    {path: '/Address', component: Address}, //trang địa chỉt
    {path: '/Website', component: Website}, //trang web
    {path: '/qr_code', component: Qr_code}, //Mã QR\
    {path: '/Calendar1', component: Calendar1}, //Mã QR\



    // login
    {path: '/login', component: login}, //Mã QR\



]

const privateRoutes = []
export {publicRoutes, privateRoutes}