export const mockLoginApi = (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: '1',
            name: "Jhon",
            email: credentials.email,
            token: 'dummy-token',
          }
        });
      }, 500); // Simulated delay
    });
  };
  