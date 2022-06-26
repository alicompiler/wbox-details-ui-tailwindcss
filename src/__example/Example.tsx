import {Provider} from "wbox-details-ui";
import {DetailsGroup} from "../Components/DetailsGroup/DetailsGroup";
import React from "react";
import {defaultGroup} from "wbox-details-ui/dist/Group/Group";
import {DetailsOptions} from "../Components/DetailsGroup/DetailsOptions";
import {DefaultsProvider} from "../Defaults/DefaultsContext";
import {ThemeProvider} from "../Theme/ThemeContext";
import {defaultTheme} from "../Theme/DefaultTheme";

export function Example() {
    return <DefaultsProvider>
        <ThemeProvider theme={defaultTheme}>
            <Provider fetchOptions={{url: 'http://localhost:8080/data'}}
                      fields={[
                          {name: 'name', title: 'Name'},
                          {name: 'birthDate', title: 'Birth Date'},
                          {name: 'country', title: 'Country'},
                          {name: 'city', title: 'City'},
                          {name: 'jobTitle', title: 'Job Title'},
                          {
                              name: 'image', title: 'Image',
                              renderValue: value => <img alt={'profile-image'} src={value}/>
                          },
                          {name: 'githubProfile', title: 'Github Profile'},
                          {name: 'email', title: 'Email'},
                          {name: 'phone', title: 'Phone'},
                      ]}
                      groups={[
                          {
                              ...defaultGroup,
                              component: DetailsGroup,
                              options: {
                                  title: 'Basic Info',
                                  actions: {},
                                  subtitle: 'Personal information',
                                  stripped: true,
                              } as DetailsOptions
                          }
                      ]}
                      detailsWrapperComponent={DetailsGroup}/>
        </ThemeProvider>
    </DefaultsProvider>
}