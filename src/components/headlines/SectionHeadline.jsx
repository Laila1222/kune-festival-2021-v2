import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const SectionHeadlineComp = styled(Typography)`
    font-size: 3rem;
    margin-bottom: 3rem;
    text-align: center;
`

function SectionHeadline({title, component}) {
    return (
        <SectionHeadlineComp component={component} variant="h2">
            {title}
        </SectionHeadlineComp>
    );
}

export default SectionHeadline;