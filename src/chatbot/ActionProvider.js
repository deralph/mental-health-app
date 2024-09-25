class ActionProvider {
    constructor(
      createChatBotMessage,
      setStateFunc,
      createClientMessage,
      stateRef,
      createCustomMessage,
      ...rest
    ) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.stateRef = stateRef;
      this.createCustomMessage = createCustomMessage;
    }
  
    handleAskQuestion = async (question) => {
      const loadingMessage = this.createChatBotMessage(<Loader />, {
        option: { delay: 0 },
      });
  
      this.addMessageToState(loadingMessage);
      if (!question) {
        this.handleApiResponse("Please ask your question");
        return;
      }
  
      try {
        const url = "http://127.0.0.1:5001/chat"; // Your API URL
        const response = await axios.post(url, {
          question: question,
          user_id: localStorage.getItem("user_id"),
        });
  
        if (response) {
          this.handleApiResponse(response.data.answer);
        }
      } catch (error) {
        this.handleApiResponse("An error occurred. Please try again.");
        console.error("Error asking question:", error);
      }
    };
  
    handleApiResponse = (response) => {
      this.setState((prevState) => {
        const updatedMessages = prevState.messages.filter(
          (msg) => typeof msg.message === "string"
        );
  
        const responseMessage = this.createChatBotMessage(response);
  
        return {
          ...prevState,
          messages: [...updatedMessages, responseMessage],
        };
      });
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  