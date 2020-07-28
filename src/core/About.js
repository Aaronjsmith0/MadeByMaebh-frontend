import React, { useState } from 'react';
import Menu from './Menu';
import '../styles.css';
import MaebhStanding from '../images/maebhStanding.jpg';
import Footer from './Footer';

const About = () => {

    return (
        <div className='container-fluid'>
            <Menu />
            <div className="separator mb-4 mt-5">About Maebh</div>
            <img src={MaebhStanding} className='maebhStandingPic mb-4' />
            <div className='aboutP'>
                <p>
                    Excepteur elit commodo pariatur mollit ea et excepteur deserunt incididunt esse amet elit est. Culpa velit pariatur ex consequat velit et. Lorem exercitation irure eiusmod laboris occaecat eu in incididunt mollit ea exercitation ea aliquip.

                    Ipsum enim eu consequat voluptate eu ea voluptate excepteur in dolor cillum commodo aliquip. Amet aliqua velit aliqua et id incididunt officia eu enim nisi duis qui ad. Ut in nulla quis veniam reprehenderit.
                </p>
                <p>
                    Eiusmod proident tempor velit velit eiusmod adipisicing. Aliqua aliquip do do amet sint dolor est id mollit enim. Anim consequat ipsum veniam laborum do tempor. Non labore consectetur veniam proident pariatur ut ut adipisicing id cillum. Do deserunt duis adipisicing commodo anim pariatur quis in officia officia.

                    Consectetur sint proident ad ullamco nostrud veniam commodo mollit nisi. Quis est ea consequat laboris velit excepteur reprehenderit. Voluptate ipsum commodo commodo cupidatat commodo cupidatat et mollit et labore elit sint. Ipsum cupidatat laboris reprehenderit non quis. Irure nulla proident non anim velit adipisicing proident veniam ea irure anim sit. Consectetur consequat reprehenderit minim nulla laborum cillum. Dolore est id nisi anim amet adipisicing culpa commodo esse occaecat commodo enim incididunt.

                    Non voluptate voluptate voluptate ea officia minim tempor voluptate adipisicing dolore aliqua. Id ut velit eu tempor proident amet velit eiusmod eiusmod aliqua aute ex. Lorem consequat officia in incididunt ut anim culpa ea culpa nulla reprehenderit Lorem. Exercitation officia dolore nulla laboris in irure nostrud do. Exercitation irure tempor minim Lorem id consequat nisi pariatur quis. Nisi incididunt quis sint esse duis sint qui quis commodo esse ea do labore.

                    Elit ut velit aliquip excepteur labore ea et aliqua proident. Sint nisi laborum velit non ex dolore non quis consequat. Elit ut aliquip deserunt incididunt incididunt ex nisi enim eiusmod. Ipsum do ex aliquip et mollit officia. Duis ipsum fugiat qui est do sunt in velit culpa nisi aliquip tempor eu. Id sint nulla magna magna sunt ipsum enim. Id fugiat est duis est quis.

                    Proident ipsum occaecat velit occaecat nostrud culpa ipsum laborum reprehenderit ea do. Exercitation minim quis eiusmod enim cupidatat nulla do consectetur adipisicing est. Commodo fugiat nostrud esse ad labore aliquip eu esse est veniam laboris. Nulla nisi consectetur cillum deserunt veniam. Labore et laboris fugiat excepteur adipisicing magna consequat qui irure esse irure cillum qui. Nulla sit sit dolore elit elit nisi laborum laboris quis velit.

                    Aliquip tempor enim duis cillum sint fugiat consequat occaecat eu. Occaecat consectetur aute quis occaecat velit cillum nisi in. Et sunt veniam reprehenderit cillum excepteur commodo esse in aliqua laboris id deserunt pariatur cupidatat. Commodo est qui nulla fugiat quis quis eiusmod quis officia aliquip in. Dolor velit dolore incididunt ea nostrud est excepteur sit id. Ea anim ipsum eiusmod qui consequat et id in nisi sunt eu non laborum.

                    Magna dolor laboris culpa mollit aliquip aute velit laborum ullamco esse. Sit adipisicing reprehenderit aliquip proident elit. Deserunt consequat magna laborum eu occaecat ipsum eu labore laboris labore Lorem.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;