import {  render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import {BrowserRouter} from 'react-router-dom';
import {DetailAnnonce} from './DetailAnnonce';




// Path: Web App Frontend\src\Pages\DetailAnnonce\DetailAnnonce.js

  
  afterEach(() => {
    jest.restoreAllMocks();
  });

describe('Render Tests for the <Annonces> Page', () => {
    it('Should render without crash', async () => {
        localStorage.setItem('user', JSON.stringify({id:1}));
        render(
            <BrowserRouter>
                <DetailAnnonce/>
            </BrowserRouter>
        )
    })
})

/*
describe('Integration Tests for the <DetailAnnonce> Page', () => { 

    it('Should fetch the /DetailAnnonce route once with the correct url', async () => {
        const jestSpy = jest.spyOn(global, 'fetch')
        
        render(
            <BrowserRouter>
                <DetailAnnonce/>
            </BrowserRouter>        );
        
        await act(async () => {
            expect(jestSpy).toHaveBeenCalledTimes(2);
            expect(jestSpy).toHaveBeenCalledWith("http://localhost:3001/annonces/detailAnnonce?id=undefined");
        })


        }
    )

})

*/



