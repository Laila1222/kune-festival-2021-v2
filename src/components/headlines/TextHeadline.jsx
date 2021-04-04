import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const TextHeadlineComp = styled(Typography)`
    font-size: 1.7rem;
    margin-bottom: 1rem;
`

function TextHeadline({title, component}) {
    return (
        <TextHeadlineComp  component={component} variant="h4" >{title}</TextHeadlineComp>
    );
}

export default TextHeadline;