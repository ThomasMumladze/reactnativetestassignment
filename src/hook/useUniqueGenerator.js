export const useUniqueGenerator = () => {
     const filterUniqueIds = (arr) => {
        const uniqueIds = {};
        const result = [];
    
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (!uniqueIds[item.id]) {
                result.push(item);
                uniqueIds[item.id] = true;
            }
        }
    
        return result;
    };

    return {filterUniqueIds};
}
