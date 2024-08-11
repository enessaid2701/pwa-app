import React from 'react';
import { useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';

function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Snackbar
      open={!isOnline}
      message="You are currently offline"
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    />
  );
}

export default OfflineIndicator;
