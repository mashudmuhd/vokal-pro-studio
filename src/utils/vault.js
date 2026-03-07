/**
 * Production-ready IndexedDB wrapper for storing audio blobs locally.
 * Blob URLs are not persistent across refreshes, so we store the actual binary data.
 */

const DB_NAME = 'VokalProStudioDB';
const STORE_NAME = 'audio_vault';
const DB_VERSION = 1;

export const openVaultDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'timestamp' });
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
};

export const saveAudioToVault = async (meta, audioBlob) => {
    try {
        const db = await openVaultDB();
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        // Store the actual blob with the metadata
        const item = {
            ...meta,
            audioBlob,
            // We'll regenerate the URL from the blob when loading
            url: null
        };

        return new Promise((resolve, reject) => {
            const request = store.put(item);
            request.onsuccess = () => resolve(true);
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Failed to save to IndexedDB:", error);
        return false;
    }
};

export const getVaultItems = async () => {
    try {
        const db = await openVaultDB();
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                const items = request.result;
                // Sort by timestamp descending
                items.sort((a, b) => b.timestamp - a.timestamp);

                // Regenerate Blobs URLs
                const itemsWithUrls = items.map(item => {
                    if (item.audioBlob) {
                        return {
                            ...item,
                            url: URL.createObjectURL(item.audioBlob)
                        };
                    }
                    return item;
                });
                resolve(itemsWithUrls);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Failed to load from IndexedDB:", error);
        return [];
    }
};

export const deleteVaultItem = async (timestamp) => {
    try {
        const db = await openVaultDB();
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        return new Promise((resolve, reject) => {
            const request = store.delete(timestamp);
            request.onsuccess = () => resolve(true);
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Failed to delete from IndexedDB:", error);
        return false;
    }
};

export const clearVault = async () => {
    try {
        const db = await openVaultDB();
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        return new Promise((resolve, reject) => {
            const request = store.clear();
            request.onsuccess = () => resolve(true);
            request.onerror = (e) => reject(e.target.error);
        });
    } catch (error) {
        console.error("Failed to clear IndexedDB:", error);
        return false;
    }
};
