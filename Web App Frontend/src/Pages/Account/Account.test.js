import {  render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Account from './Account';
import {BrowserRouter} from 'react-router-dom';

/*Importing Config*/
import config from "../../config.json";

describe('Account', () => {
    it('Should render without crash', async () => {
        render(
            <Account/>
        )
    })
})
