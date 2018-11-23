import * as functions from 'firebase-functions';
import {
    df
 } from './outside-questions/dialogflow';

export const dfWebhooks = functions.https.onRequest(df);
