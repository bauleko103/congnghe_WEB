import * as React from 'react';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
  return (
    <Link class="about-picture" href={project.url}>
      <img src={project.image} alt="activities1" />
      <p class="picture-tittle">
        {project.title}
      </p>
    </Link>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.array.isRequired
};
