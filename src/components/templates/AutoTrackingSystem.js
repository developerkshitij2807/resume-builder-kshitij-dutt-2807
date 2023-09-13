"use client";

import React from 'react'
import { CenterAlignBox } from '@/src/components/custom/CenterAlignBox';
import { GET_USER_DETAILS_QUERY } from '@/graphql/queries/userQueries';
import { useQuery } from '@apollo/client';




const AutoTrackingSystemTemplate = () => {

  const { data } = useQuery(GET_USER_DETAILS_QUERY);

  console.log(data);

  return (
    <CenterAlignBox></CenterAlignBox>
  )
}

export default AutoTrackingSystemTemplate