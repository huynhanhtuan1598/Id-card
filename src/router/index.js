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




const publicRoutes = [
    {path: '/', component: Home}, //trang chủ thông tin
    {path: '/home', component: Home}, //trang chủ thông tin
    {path: '/home/edit_profile', component: edit_profile}, //trang chủ thông tin
    {path: '/company', component: company}, //thông tin công ty
    {path: '/career', component: career}, //trang chức vụ
    {path: '/hash_url', component: hash_url}, //trang tên ngươi dùng
    {path: '/from_lang', component: from_lang}, //trang ngôn ngữ
    {path: '/contact_user', component: contact_user}, //trang số điện thoại


    {path: '/form_report', component: form_report}, //trang Report
    {path: '/form_group', component: form_group}, //trang Group
    {path: '/appearance', component: appearance}, //trang theme
    {path: '/add_contact', component: add_contact}, //trang add_contact















]

const privateRoutes = []
export {publicRoutes, privateRoutes}