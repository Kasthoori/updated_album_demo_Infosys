import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../../components/ListItem/ListItem';
import toJson from 'enzyme-to-json';


describe('ListItem Component', () => {

    //test case 01. one rows in listitem 
    test('row numbers in list', () => {
        const wrapper = shallow(<ListItem  />);
        expect(wrapper.find('[data-testid="listitemrow"]').length).toBe(1);
        expect(wrapper.find('[data-testid="listitemrow"]').text()).toBe("More");
    });

    //test case 02. number of columns in listitem
    test('row numbers in list', () => {
        const wrapper = shallow(<ListItem  />);
        expect(wrapper.find('td').length).toBe(3);
        expect(wrapper.find('[data-testid="listitemcolone"]').length).toBe(1);
        expect(wrapper.find('[data-testid="listitemcoltwo"]').length).toBe(1);
    });

    //test case 03. number of button rows
    test('row numbers in list', () => {
        const wrapper = shallow(<ListItem  />);
        expect(wrapper.find('[data-testid="listitemcolbtn"]').length).toBe(1);
        expect(wrapper.find('[data-testid="listitemcolbtn"]').text()).toEqual('More');
    });

    //test case 04. test btn call
    test('test button call', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<ListItem onClick={mockCallBack} />));
        button.find('[data-testid="calldetailbtn"]').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    //render without crashing (snapshot)
    test('render without crashing', () => {
        const wrapper = shallow(<ListItem  />);
        expect(toJson(wrapper)).toMatchSnapshot();
    
    });


});


