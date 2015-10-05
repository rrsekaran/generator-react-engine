/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2015 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/
'use strict';


var React = require('react');
var ReactBS = require('react-bootstrap');
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');
var Menu = require('react-menu');
var MenuTrigger = Menu.MenuTrigger;
var MenuOptions = Menu.MenuOptions;
var MenuOption = Menu.MenuOption;

//import { Tabs } from 'react-bootstrap/lib/Tabs';
//import { Tab } from 'react-bootstrap/lib/Tab';

module.exports = React.createClass({


  render: function render() {

    var tabsInstance = (
  <Tabs defaultActiveKey={2} position="left" tabWidth={2}>
    <Tab eventKey={1} title="leftTab">

    <Menu className='myMenu'>
        <MenuTrigger>
          ⚙
        </MenuTrigger>
        <MenuOptions>
      
          <MenuOption >Home</MenuOption>
          <MenuOption >Complete FATCA</MenuOption>
          <MenuOption >Thank you</MenuOption>

        </MenuOptions>
        </Menu>

    </Tab>
    <Tab eventKey={2} title="mainTab">Tab 2 content</Tab>
  </Tabs>
);

    return (
     tabsInstance
    );
  }
});
