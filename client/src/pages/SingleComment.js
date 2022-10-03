//make sure authorization is added for when logged in 
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_THOUGHT } from '../utils/queries';
import ReactionList from '../components/ReactionList';