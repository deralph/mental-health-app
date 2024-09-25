import React from 'react';
import TherapyForm from '../login/form-index.tsx'; // Path to your TherapyForm
import ActionProvider from './ActionProvider'; // Path to your ActionProvider

const ParentComponent = () => {
  const actionProvider = new ActionProvider();

  const handleFormSubmission = (formattedData) => {
    // Call chatbot method with the formatted data
    actionProvider.handleAskQuestion(formattedData);
  };

  return (
    <div>
      <TherapyForm onSubmitForm={handleFormSubmission} />
    </div>
  );
};

export default ParentComponent;
