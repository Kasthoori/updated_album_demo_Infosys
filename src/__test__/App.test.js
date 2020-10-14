/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { cleanup, wait, render } from '@testing-library/react';
import * as albums from '../__mocks__/albums';
import axios from 'axios';
import toJson from "enzyme-to-json";




describe('App Component Test', () => {

  jest.mock('../__mocks__/albums');
  jest.mock('axios');

  afterEach(cleanup);
 

  //test case 01. render header component

      test('render header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('[data-testid="headercomp"]').length).toBe(1);
      });

  //test case 02. url call of fetchData

      it('mocking data fetching url call',async () => {
        expect.assertions(1);
        return albums.getAlbumTitle(4).then(data => expect(data).toEqual('Album One'));
      });

  //test case 03. axios cass in fetchData function
      test('mocking axios request', async () => {
        const data = {
        data: [
              {
                id: 1,
                title: 'title 1'
              },
              {
                id: 2,
                title: 'title 2'
              },
              {
                id: 3,
                title: 'mocked title'
              }
            ]
        };
        
        axios.get.mockResolvedValueOnce(data);
        const wrapper = shallow(<App />);
            await wait(() => {
              expect(wrapper.exists()).toEqual(true);
            });
        });

  //test case 04. render data table

      test('should render data table', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('[data-testid="datatables"]').length).toBe(1);
      });

  //test case 05 number of rendering columns
      test('number of rendering columns', () => {
        const wrapper = shallow(<App  />);
        expect(wrapper.find('th').length).toBe(3);
        expect(wrapper.find('[data-testid="albumid"]').text()).toBe('Album ID');
        expect(wrapper.find('[data-testid="albumtitle"]').text()).toBe('Album Title');
        expect(wrapper.find('[data-testid="moredetails"]').text()).toBe('More Details');

      });

      //test case 06 to chect withou crashing (snapshot)
      test('render without crashing', () => {
          const wrapper = shallow(<App  /> );
          expect(toJson(wrapper)).toMatchSnapshot();
        
      
      });

   

});

