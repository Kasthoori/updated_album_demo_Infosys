import React from 'react';
import { shallow } from 'enzyme';
import ListItemImg from '../../../components/ListItemImg/ListItemImg';
import toJson from 'enzyme-to-json';

      
     const mockFunction = jest.fn();

     const track = {
            thumbnailUrl : 'http://testurl',
            title : 'Test title',
       } 

describe('ListItemImg Component', () => {


    //test case 01. thumbnail image to tested
    test('test image thumbnail', () => {

        const wrapper = shallow(<ListItemImg onclick={mockFunction} track = {track} />);
         expect(wrapper.find('[data-testid="imagethumbnail"]').length).toBe(1);
      });

      //test case 02. number of tr tags
      test('number of tr tags', () => {

        const wrapper = shallow(<ListItemImg onclick={mockFunction} track = {track} />);
         expect(wrapper.find('div').length).toBe(1);
      });

      //test case 03. check onClick event call
        test('test button call', () => {
            const button = shallow(<ListItemImg onclick={mockFunction} track = {track}  />);
            button.find('[data-testid="onclickevent"]').simulate('click');
            expect(mockFunction.mock.calls.length).toEqual(1);
        });

    //render without crashing (snapshot)
    test('render without crashing', () => {
        const wrapper = shallow(<ListItemImg onclick={mockFunction} track = {track}  />);
        expect(toJson(wrapper)).toMatchSnapshot();
      
    
    });


});