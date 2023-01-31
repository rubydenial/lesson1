export const printProfile = profileData => {
    const { name, company } = profileData;
    console.log(profileData);
    console.log(`${name} from ${company}`);
}