import React from 'react';
import Header from '../../components/Header/Header';
import { MacbookScrollDemo } from "../../components/macbook-scroll/macbook-scroll"
import ModernRepoProfile from "../../components/expandable/expandable"
const ProjectsPage = () => {
    return (
        <>
            <Header></Header>
            <MacbookScrollDemo></MacbookScrollDemo>
            <ModernRepoProfile></ModernRepoProfile>
        </>
    );
};

export default ProjectsPage;
